pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install dependencies') {
            steps {
                sh 'npm i'
            }
        }
        
        stage('Run Playwright tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}