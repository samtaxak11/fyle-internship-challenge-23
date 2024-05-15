import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { GitHubUser } from '../models/GitHubUser';
import { GithubApiService } from '../services/github-api.service';

@Component({
  selector: 'app-main-geist',
  templateUrl: './main-geist.component.html',
})
export class MainGeistComponent {
  // Input properties for component customization
  @Input() appTitle: string = '';
  @Input() appTheme: string = '';

  // Reference to the HTML element for scrolling
  @ViewChild('searchResultSection', { static: false })
  searchResultSection: ElementRef | null = null;

  // Octocat image URL
  octocatImageUrl: string = '/assets/images/luchadortocat.png';

  // Input property for the username to search
  username: string = '';

  // State properties
  repos: any[] = [];
  totalRepoCount: number = 0;
  currentPage: number = 1;
  perPage: number = 10;
  isValidUser: boolean = false;
  searchClicked: boolean = false;
  searchedUser: GitHubUser | undefined;

  // Loading indicators
  loadingRepo: boolean = false;
  loadingUser: boolean = false;

  // Dropdown options for items per page
  itemsPerPageOptions: number[] = [10, 15, 25, 50, 100];

  // Constructor to inject GitHub service
  constructor(private githubService: GithubApiService) {}

  /**
   * @brief Handles the user search process by calling the necessary functions.
   * @param result - Object containing user search result
   */
  searchUser(result: any): void {
    this.username = result.username;

    if (this.username.length) {
      this.searchClicked = true;

      // Initiates user details and repositories search
      this.searchUserDetails();
      this.searchUserRepositories();
    } else {
      window.alert('Enter a valid username');
    }
  }

  /**
   * @brief Retrieves user information from the GitHub service.
   */
  searchUserDetails(): void {
    this.loadingUser = true;
    this.githubService.getUserInfo(this.username).subscribe({
      next: (user: GitHubUser) => {
        // Updates user information on successful retrieval
        this.totalRepoCount = user.public_repos;
        this.searchedUser = user;
        this.isValidUser = true;
        this.loadingUser = false;
      },
      error: (error) => {
        // Handles errors in user information retrieval
        this.isValidUser = false;
        this.loadingUser = false;
        console.error('Error loading user details:', error);
        this.handleError('Error loading user details. Please try again.');
      },
    });
  }

  /**
   * @brief Retrieves user repositories from the GitHub service.
   */
  searchUserRepositories(): void {
    this.loadingRepo = true;
    this.githubService
      .getUserRepos(this.username, this.currentPage, this.perPage)
      .subscribe({
        next: (repos) => {
          // Updates repository information on successful retrieval
          this.repos = repos;
          this.loadingRepo = false;
          this.scrollToSearchResult();
        },
        error: (error) => {
          // Handles errors in repository information retrieval
          this.repos = [];
          this.isValidUser = false;
          this.loadingRepo = false;
          this.scrollToSearchResult();
          console.error('Error loading repositories:', error);
          this.handleError('Error loading repositories. Please try again.');
        },
      });
  }

  // Private method to handle errors by displaying an alert
  private handleError(errorMessage: string): void {
    console.log(errorMessage);
  }

  // Private method to scroll to the search result section
  private scrollToSearchResult(): void {
    if (this.searchResultSection && this.searchResultSection.nativeElement) {
      this.searchResultSection.nativeElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  /**
   * @brief Handles the change in items per page in the dropdown.
   * @param itemsPerPage - The number of items to display per page.
   */
  updateItemsPerPage(itemsPerPage: number): void {
    this.perPage = itemsPerPage;
    this.currentPage = 1;
    this.searchUserRepositories();
  }

  /**
   * @brief Handles the change in the current page.
   * @param page - The page number to navigate to.
   */
  updateCurrentPage(page: number): void {
    this.currentPage = page;
    this.searchUserRepositories();
  }
}
