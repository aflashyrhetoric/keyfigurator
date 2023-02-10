I was looking for a solution for this problem for the past two days, ended up finding it on a excruciating 15 minute YouTube video that unbelievably actually got it right.

SSH into the container with sail shell or use the Docker container terminal directly from its dashboard;
Run chown -R sail:sail storage;
Problem solved.
This is because the user sail has the same UID of 1000 as your actual Linux user, which owns the directory storage in your host machine.
