import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

   registrationForm: FormGroup;

    constructor(
      private FormBuilder :FormBuilder,
      private toastController:ToastController,
      private backendService : BackendService
    ) {

      this.registrationForm=this.FormBuilder.group({

        firstName:[ '', Validators.required],
        lastName:['', Validators.required],
        email:['', [Validators.required, Validators.email]],
        age:['', [Validators.required,Validators.pattern('^[0-9]*$')]],
        gender:['',Validators.required],
        height:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
        weight:['',[Validators.required,Validators.pattern('^[0-9]*$')]],
        medicalHistory: [''],

      });
    }

    async presentToast(message: string, color: 'success' | 'danger') {
      console.log('Presenting Toast:', message);
      const toast = await this.toastController.create({
        message: message,
        duration: 5000,
        color: color,
        position: 'bottom',
      });
      await toast.present();
    }
    
    async onSubmit() {
      if (this.registrationForm.invalid) {
        this.presentToast('Please fill in all required fields correctly!', 'danger');
        return;
      }
    
      const formDetails = this.registrationForm.value;
    
      //just for my debugging
      console.log('Form Details:', formDetails);
    
      this.backendService.registerUser(formDetails).subscribe(
        async (response: any) => {
          console.log('Backend Response:', response);
    
       
          await this.presentToast(`Registration Successful!
        Name: ${formDetails.firstName} ${formDetails.lastName}
        Email: ${formDetails.email}
        Age: ${formDetails.age}
        Gender: ${formDetails.gender}
        Height: ${formDetails.height} cm
        Weight: ${formDetails.weight} kg
        Medical History: ${formDetails.medicalHistory || 'None'}`, 'success');
        },
        async (error: any) => {
          console.log('Error Response:', error);
    
          if (error.status === 400) {
            await this.presentToast(error.error.message, 'danger');
          } else {
            await this.presentToast('Unexpected error occurred', 'danger');
          }
        }
      );
    }
    


  }
