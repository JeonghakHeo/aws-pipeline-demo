#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { AwsPipelineDemoStack } from '../lib/aws-pipeline-demo-stack';

const app = new cdk.App();
new AwsPipelineDemoStack(app, 'AwsPipelineDemoStack', {
  env: { account: '550269702703', region: 'ap-southeast-2' },
});

app.synth()