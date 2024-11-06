// pipeline {
//     agent any
//     tools {nodejs "NodeJS18.20.4"}
//     stages {
//         stage('Build') {
//             steps {
//                 sh 'npm install'
//             }
//         }
//         stage('Deliver') {
//             steps {
//                 sh 'chmod -R +rwx ./jenkins/scripts/deliver.sh'
//                 sh 'chmod -R +rwx ./jenkins/scripts/kill.sh'
//                 sh './jenkins/scripts/deliver.sh'
//                 input message: 'Finished using the web site? (Click "Proceed" to continue)'
//                 sh './jenkins/scripts/kill.sh'
//             }
//         }
//     }
// }

pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/dhimzikri/frontend.git'
            }
        }

        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
    }
}
