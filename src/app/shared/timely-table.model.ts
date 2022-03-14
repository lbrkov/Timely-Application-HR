export class TimelyTable {
    timeId:number=0;
    projectName:string = '';
    startTime:string = new Date().toLocaleString();
    stopTime:string = '/' ;
    duration:number | undefined;
}
