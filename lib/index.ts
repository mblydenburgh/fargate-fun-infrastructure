// import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export interface FargateFunInfrastructureProps {
  // Define construct properties here
}

export class FargateFunInfrastructure extends Construct {

  constructor(scope: Construct, id: string, props: FargateFunInfrastructureProps = {}) {
    super(scope, id);

    // Define construct contents here

    // example resource
    // const queue = new sqs.Queue(this, 'FargateFunInfrastructureQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
