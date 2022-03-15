
export class TimelyTable {
    timeId:number=0;
    projectName:string = '';
    startTime:string = new Date().toLocaleString('en-US', { hour12: false });
    stopTime:string = 'In progress' ;
    duration:string = '/';
}
