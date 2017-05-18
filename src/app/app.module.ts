import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MomentModule} from 'angular2-moment';
import {PhoneService} from '../services/phone';
import {LoginPage} from '../pages/login/login';
import {VerificationPage} from '../pages/verification/verification';
import {ProfilePage} from '../pages/profile/profile';
import {MyApp} from './app.component';

import {ChatsPage} from '../pages/chats/chats';
import {NewChatComponent} from '../pages/chats/new-chat';
import {ChatsOptionsComponent} from '../pages/chats/chats-options';
import {MessagesPage} from '../pages/messages/messages';
import {MessagesOptionsComponent} from '../pages/messages/messages-options';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    ChatsPage,
    MessagesPage,
    LoginPage,
    VerificationPage,
    ProfilePage,
    ChatsOptionsComponent,
    NewChatComponent,
    MessagesOptionsComponent
  ],
  imports: [
    BrowserModule,
    MomentModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ChatsPage,
    MessagesPage,
    LoginPage,
    VerificationPage,
    ProfilePage,
    ChatsOptionsComponent,
    NewChatComponent,
    MessagesOptionsComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PhoneService
  ]
})

export class AppModule {}
