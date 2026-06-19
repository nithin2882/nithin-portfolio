export const projects = [
  {
    id: 1,
    title: "AWS Fault-Tolerant Data Ingestion Pipeline",
    impact: "AWS • ETL • CLOUD",
    description:
      "Designed and implemented a cloud-native ingestion pipeline that validates CSV datasets from Amazon S3, loads clean records into Amazon RDS MySQL, and routes failures to an S3 fallback zone for recovery.",
    image:
      "images/projects/aws-fault-tolerant-pipeline/architecture1.png",
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
  {
  id: 2,

  title: "Real-Time Kafka Streaming Pipeline",

  impact: "KAFKA • STREAMING • AIRFLOW",

  description:
    "Designed and deployed a containerized real-time data pipeline leveraging Apache Kafka for event streaming, PostgreSQL for storage, and Apache Airflow for orchestration. Demonstrated scalable event processing patterns commonly used in modern data platforms.",

  image:
    "images/projects/kafka-streaming-pipeline/architecture.png",

  github:
    "https://github.com/nithin2882/kafka-spark-airflow-pipeline",

  tech: [
    "Kafka",
    "Python",
    "PostgreSQL",
    "Docker",
    "Airflow"
  ]
}
];