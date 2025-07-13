pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'docker build -t my-devops-app .'
            }
        }
        stage('RUN') {
            steps {
                sh 'docker run -d -p 3000:3000 my-devops-app'
            }
        }
    }
}