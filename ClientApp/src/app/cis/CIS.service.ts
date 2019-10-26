import { Injectable } from '@angular/core';

@Injectable()
export class CISService {


constructor() { }

getAll(){
    return ["IS" , "CS" , "IT" , "General" , "BIO"];
}

}
