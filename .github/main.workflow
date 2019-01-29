workflow "Build Web" {
  on = "push"
  resolves = ["npm build:web"]
}

action "npm install:web" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "run install:web"
}

action "npm build:web" {
  uses = "actions/npm@3c8332795d5443adc712d30fa147db61fd520b5a"
  args = "run build:web"
  needs = ["npm install:web"]
}
