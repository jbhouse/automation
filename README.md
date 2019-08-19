# automation
automate your dev environment

Node.js based cli to help me automate my dev workflow.
Also the beginings of an xml parsing and replacing program that would allow for automated changes to xml dependency version 

Sample use case:

Service2 depends on Service1

Service1 has an upgrade.
Upon upgrading Service1, we want Service2 to update the dependency version it has for service1 to *current*, restart itself, and run its test suite
