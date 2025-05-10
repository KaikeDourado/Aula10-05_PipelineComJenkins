pipeline {
    agent any

    stages {
        stage('Instalar Dependências') {
            steps {
                script {
                    bat 'npm install'
                }
            }
        }

        stage('Executar Testes') {
            steps {
                script {
                    bat 'npm test'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline concluído.'
        }
    }
}
