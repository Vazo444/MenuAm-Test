pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        
        
        stage('Run Playwright tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
}