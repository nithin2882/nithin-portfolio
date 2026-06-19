export const projects = [
  {
    id: 1,
    title: "AWS Fault-Tolerant Data Ingestion Pipeline",
    impact: "AWS • ETL • CLOUD",
    description:
      "Designed and implemented a cloud-native ingestion pipeline that validates CSV datasets from Amazon S3, loads clean records into Amazon RDS MySQL, and routes failures to an S3 fallback zone for recovery.",
    image:
      "images/projects/aws-fault-tolerant-pipeline/architecture.png",
    github:
      "https://github.com/nithin2882/s3-rds-glue-ingestion",
    tech: [
      "AWS S3",
      "Python",
      "Pandas",
      "RDS",
      "Docker",
    ],
  },
];