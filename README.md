# Timely Application

Application for time tracking

## How to build and run

- Clone repository and then in Command Prompt position yourself in that folder with `cd .\Timely-Application-HRProdigy\`
- Open Visual Studio Code with `code .`
- Build application using `dotnet build`
- Run application in terminal with `dotnet run --project .\TimelyApplication\TimelyApplication.csproj`
- Open another terminal, position yourself in the right folder again and run Angular with `ng serve -c=production`
- Open `http://localhost:4200/api/Times` in you web browser
- You should be able to see your application now

## How to use application

- In textbox Project Name write your project name you wish to start, don't worry you will be able to change this name later on
- When you write your project name, to start time tracking click on button... Start Time 
- The time tracking table should be automatically updated and you should see your project name, start date and time in table
- For stop time in your table you should be able to see that it writes **In progress**
- Duration is by default set to "/"  until we stop the time manually
- You can add and start as many projects as you want even before stopping the project started before that
- When you wish to stop the time tracking of a project, click on the name of a project you wish to stop and then click on button Stop Time
- Now your table should be updated and you should see project name,start date and time and stop date and time
- To calculate duration of this project, click on project name in table and then click on button Calculate Time
- **You need to stop the time first before you calculate the duration**
- Now you should see every information about that project in you table 
- You can also update your stop time just by clicking on project name and then clicking on stop time button again but you can't update your start time 
- If you wish to change your project name you can do that by clicking on project you wish to change and then inserting another name in textbox Project Name and clicking on Start Time button
- If you want to delete your project from the table you can do that by clicking on the trash icon next to calculate duration button
