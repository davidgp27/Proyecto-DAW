package com.jinbu.jinbu.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.StaticCredentialsProvider;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;

@Configuration
public class S3Config {
    @Value(("${cloud.aws.credentials.access-key}"))
    private String accessKey;

    @Value("${cloud.aws.credentiasl.secret-key}")
    private String secretKey;

    @Value("${cluod.aws.region.static}")
    private String region;

    @Bean
    public S3Client s3Client() {

        AwsBasicCredentials awsBasicCredentials = AwsBasicCredentials.create(secretKey, accessKey);
        S3Client.builder()
                .region(Region.of(region))
                .credentialsProvider(StaticCredentialsProvider.create(awsBasicCredentials))
                .build();


    }
}
