import { Construct } from 'constructs';
import { Peer, Port, SecurityGroup, Vpc } from "aws-cdk-lib/aws-ec2";
import { Cluster } from "aws-cdk-lib/aws-ecs";
import { Stack } from 'aws-cdk-lib';
import { Repository } from 'aws-cdk-lib/aws-ecr';

export interface FargateFunInfrastructureProps {
}

export class FargateFunInfrastructureStack extends Stack {

  constructor(scope: Construct, id: string, props: FargateFunInfrastructureProps = {}) {
    super(scope, id);

    new Repository(this, "DockerRepository", {
      repositoryName: "fargate_fun_repository"
    })

    const vpc = new Vpc(this, "VPC", {
      maxAzs: 3
    })

    new Cluster(this, "FargateCluster", {
      clusterName: "fargate-fun-cluster",
      vpc: vpc
    })

    const securityGroup = new SecurityGroup(this, "FargateSG", {
      securityGroupName: "fargate-shared-sg",
      vpc,
      allowAllOutbound: true
    })
    securityGroup.addEgressRule(Peer.anyIpv4(), Port.tcp(80))

    
  }
}
