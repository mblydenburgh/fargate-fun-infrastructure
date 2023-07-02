import { Construct } from 'constructs';
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Cluster } from "aws-cdk-lib/aws-ecs";
import { Stack } from 'aws-cdk-lib';

export interface FargateFunInfrastructureProps {
}

export class FargateFunInfrastructureStack extends Stack {

  constructor(scope: Construct, id: string, props: FargateFunInfrastructureProps = {}) {
    super(scope, id);

    const vpc = new Vpc(this, "VPC", {
      maxAzs: 3
    })

    new Cluster(this, "FargateCluster", {
      clusterName: "test_cluster",
      vpc: vpc
    })

  }
}
