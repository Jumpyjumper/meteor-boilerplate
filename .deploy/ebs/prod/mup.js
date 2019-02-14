module.exports = {
    app: {
        type: 'aws-beanstalk',
        name: 'meteor-boilerplate',
        path: '../../../',
        env: {
            ROOT_URL: 'https://x.com',
            MONGO_URL: 'mongodb://user:pass@domain.com'
        },
        auth: {
            id: 'x',
            secret: 'x'
        },
        docker: {
          image: 'abernix/meteord:node-8.9.1-base',
        },
        region: 'us-west-2',
        minInstances: 1,
        maxInstances: 2,
        instanceType: 't2.micro',
        sslDomains: ['x.com'],
        forceSSL: true,
        buildOptions: {
          serverOnly: true,
        },
        customBeanstalkConfig: [
          {
              namespace: 'aws:ec2:vpc',
              option: 'VPCId',
              value: 'vpc-1111111111111'
          },
          {
            namespace: 'aws:ec2:vpc',
            option: 'Subnets',
            value: 'subnet-2222222222222,subnet-3333333333333'
          }
      ],
    },
    plugins: ['mup-aws-beanstalk']
  };
  