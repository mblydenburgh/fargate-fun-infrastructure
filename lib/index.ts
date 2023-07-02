import { Construct } from 'constructs';
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Cluster } from "aws-cdk-lib/aws-ecs";

export interface FargateFunInfrastructureProps {
}

export class FargateFunInfrastructure extends Construct {

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
