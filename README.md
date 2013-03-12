# Echidna UI

Testing server for  Echidna UI components

To use it :

    git clone git@github.com:transist/echidna-ui-server.git

    cd echidna-ui-server

    // add the public folder
    git clone git@github.com:transist/echidna-ui.git

    // add data generator and models
    git clone git@github.com:transist/echidna-data.git    

    // launch the app
    node app.js

    // app runnning on port 3030...


# Access on Echidna1

restarting the service:

    sudo systemctl restart echidna-ui-server.service

getting the status:

    sudo systemctl status echidna-ui-server.service 

reading the logs:

    sudo systemd-journalctl -f -a _SYSTEMD_UNIT=echidna-ui-server.service


