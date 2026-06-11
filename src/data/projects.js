export const projects = [
  {
    id: 1,
    title: "AWS Fault-Tolerant Data Ingestion Pipeline",

    description:
      "Designed and implemented a cloud-native data ingestion pipeline that reads CSV files from Amazon S3, validates records using Python and Pandas, loads data into Amazon RDS MySQL, and routes failed datasets to an S3 fallback zone for recovery.",

    image:
      "/images/projects/aws-fault-tolerant-pipeline/architecture.png",

    github:
      "https://github.com/nithin2882/s3-rds-glue-ingestion",

    tech: [
      "AWS S3",
      "RDS MySQL",
      "Python",
      "Pandas",
      "Docker"
    ]
  }
];