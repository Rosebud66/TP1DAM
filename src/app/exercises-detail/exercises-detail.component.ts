import { Component, OnInit } from '@angular/core';
import {Message,MessageService} from 'primeng/api';

@Component({
  selector: 'app-exercises-detail',
  templateUrl: './exercises-detail.component.html',
  styleUrls: ['./exercises-detail.component.scss'],
  providers: [MessageService]
})
export class ExercisesDetailComponent implements OnInit {
  variable = false;

  msgs1: Message[] = [];

  msgs2: Message[] = [];
  constructor(private messageService: MessageService) {}

        ngOnInit() {
            this.msgs1 = [
                {severity:'success', summary:'Success', detail:'Message Content'},
                {severity:'info', summary:'Info', detail:'Message Content'},
                {severity:'warn', summary:'Warning', detail:'Message Content'},
                {severity:'error', summary:'Error', detail:'Message Content'},
                {severity:'custom', summary:'Custom', detail:'Message Content', icon: 'pi-file'}
            ];
        }
        
        addMessages() {
            this.msgs2 = [
                {severity:'success', summary:'Success', detail:'Message Content'},
                {severity:'info', summary:'Info', detail:'Message Content'},
                {severity:'warn', summary:'Warning', detail:'Message Content'},
                {severity:'error', summary:'Error', detail:'Message Content'}
            ];
        }

        clearMessages() {
            this.msgs2 = [];
        }

        showViaService() {
          this.variable = true;
          console.log("FUNCIONA")
        }
        hiddeViaService() {
          this.variable = false;
          console.log("FUNCIONA ELIMINAR")
        }
    }


