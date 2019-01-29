workflow "Build Web" {
  on = "push"
  resolves = ["npm build:web"]
}

action "npm install:web" {
  uses = "actions/npm@master"
  args = "run install:web"
}

action "npm build:web" {
  uses = "actions/npm@master"
  args = "run build:web"
  needs = ["npm install:web"]
}

workflow "Debloy Web to Azure" {
  on = "push"
  resolves = ["Azure Login"]
}

action "Azure Login" {
  uses = "Azure/github-actions/login@master"
  env = {
    AZURE_SUBSCRIPTION = "Visual Studio Enterprise"
  }
  secrets = ["AZURE_SERVICE_APP_ID", "AZURE_SERVICE_PASSWORD", "AZURE_SERVICE_TENANT"]
}

action "Deploy to Web App" {
  uses = "Azure/github-actions/webapp@master"
  needs = ["Azure Login"]
  env = {
    AZURE_APP_NAME = "2choix"
    AZURE_APP_PACKAGE_LOCATION = "/github/workspace/web/dist/web"
  }
}
