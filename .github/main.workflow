workflow "Build and deploy web on push" {
  on = "push"
  resolves = ["Azure Deploy", "Lint Web"]
}

action "Install Web" {
  uses = "actions/npm@master"
  args = "run install:web"
}

action "Build Web" {
  uses = "actions/npm@master"
  args = "run build:web"
  needs = ["Install Web"]
}

action "Lint Web" {
  needs = "Install Web"
  uses = "actions/npm@master"
  args = ["run lint:web"]
}

action "Azure Login" {
  uses = "Azure/github-actions/login@master"
  needs = ["Build web"]
  env = {
    AZURE_SUBSCRIPTION = "Visual Studio Enterprise"
  }
  secrets = [
    "AZURE_SERVICE_APP_ID",
    "AZURE_SERVICE_PASSWORD",
    "AZURE_SERVICE_TENANT",
  ]
}

action "Azure Deploy" {
  uses = "Azure/github-actions/webapp@master"
  needs = ["Azure Login"]
  env = {
    AZURE_APP_NAME = "2choix"
    AZURE_APP_PACKAGE_LOCATION = "/github/workspace/web/dist/web"
  }
}
