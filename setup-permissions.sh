#!/bin/bash

# Cloud Build CI/CD Permissions Setup Script
# Project: fastfood-website
# Service Account: 211810784165-compute@developer.gserviceaccount.com

PROJECT_ID="fastfood-website"
SERVICE_ACCOUNT="581342349973-compute@developer.gserviceaccount.com"

echo "Setting up IAM permissions for Cloud Build CI/CD deployment..."
echo "Project ID: $PROJECT_ID"
echo "Service Account: $SERVICE_ACCOUNT"
echo ""

# Enable required APIs
echo "Enabling required Google Cloud APIs..."
gcloud services enable cloudbuild.googleapis.com --project=$PROJECT_ID
gcloud services enable run.googleapis.com --project=$PROJECT_ID
gcloud services enable containerregistry.googleapis.com --project=$PROJECT_ID
gcloud services enable storage-api.googleapis.com --project=$PROJECT_ID
gcloud services enable storage-component.googleapis.com --project=$PROJECT_ID

echo ""
echo "Adding IAM roles to service account..."

# Cloud Build permissions
echo "Adding Cloud Build permissions..."
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT" \
    --role="roles/cloudbuild.builds.builder"

# Cloud Run permissions
echo "Adding Cloud Run permissions..."
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT" \
    --role="roles/run.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT" \
    --role="roles/run.developer"

# Container Registry permissions
echo "Adding Container Registry permissions..."
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT" \
    --role="roles/storage.admin"

# IAM permissions for service account management
echo "Adding IAM permissions..."
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT" \
    --role="roles/iam.serviceAccountUser"

# Compute Engine permissions (for Cloud Build)
echo "Adding Compute Engine permissions..."
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT" \
    --role="roles/compute.instanceAdmin.v1"

# Source Repository permissions (if using Cloud Source Repositories)
echo "Adding Source Repository permissions..."
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT" \
    --role="roles/source.admin"

# Logging permissions
echo "Adding Logging permissions..."
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$SERVICE_ACCOUNT" \
    --role="roles/logging.logWriter"

# Additional permissions for Cloud Build service account
echo "Adding additional Cloud Build service account permissions..."

# Get the Cloud Build service account
CLOUD_BUILD_SA="${PROJECT_ID}@cloudbuild.gserviceaccount.com"

# Grant Cloud Build service account the necessary roles
gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$CLOUD_BUILD_SA" \
    --role="roles/run.admin"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$CLOUD_BUILD_SA" \
    --role="roles/iam.serviceAccountUser"

gcloud projects add-iam-policy-binding $PROJECT_ID \
    --member="serviceAccount:$CLOUD_BUILD_SA" \
    --role="roles/storage.admin"

echo ""
echo "✅ All permissions have been set up successfully!"
echo ""
echo "Summary of roles granted to $SERVICE_ACCOUNT:"
echo "- roles/cloudbuild.builds.builder"
echo "- roles/run.admin"
echo "- roles/run.developer"
echo "- roles/storage.admin"
echo "- roles/iam.serviceAccountUser"
echo "- roles/compute.instanceAdmin.v1"
echo "- roles/source.admin"
echo "- roles/logging.logWriter"
echo ""
echo "Summary of roles granted to Cloud Build service account ($CLOUD_BUILD_SA):"
echo "- roles/run.admin"
echo "- roles/iam.serviceAccountUser"
echo "- roles/storage.admin"
echo ""
echo "You can now create your Cloud Build trigger in the GCP Console."
echo "The trigger should point to your repository and use the cloudbuild.yaml file."