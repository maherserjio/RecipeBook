import {Component, OnDestroy, OnInit} from '@angular/core';
import {DataStorageService} from '../Shared/data-storage.service';
import {AuthService} from '../app/auth/auth.service';
import {Subscription} from 'rxjs';



@Component({
    selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private userSubscription: Subscription;
  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService) {}
  ngOnInit(): void {
  this.userSubscription = this.authService.user.subscribe(user => {
  this.isAuthenticated = !!user ; // !user ? false : true ;
  });
  }
  onSaveData() {
    this.dataStorageService.storeRecipes();
  }
  onFetchData() {
  this.dataStorageService.FetchRecipes().subscribe();
  }
  onLogout() {
  this.authService.logout();
  }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}

