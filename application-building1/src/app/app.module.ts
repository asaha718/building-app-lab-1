import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConversationHistoryComponent } from './conversation-history/conversation-history.component';
import { ConversationThreadComponent } from './conversation-thread/conversation-thread.component';
import { SenderMessageComponent } from './sender-message/sender-message.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { UserMessageComponent } from './user-message/user-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConversationHistoryComponent,
    ConversationThreadComponent,
    SenderMessageComponent,
    ContactListComponent,
    ContactComponent,
    UserMessageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
