export class SearchImageController {
  constructor($http, $log, $scope) {
    'ngInject';

    this.$http = $http;
    this.$log = $log;
    this.$scope = $scope;

    this.allImages = [];
    this.searchQuery = '';
    this.searchTerm = '';

    this.currentPage = 1;
    this.allPhotosCount = 0;
    this.perPageCount = 10;

    this.showLoader = false;
    this.noResults = false;
  }

  startLoader() {
    this.showLoader = true;
  }

  stopLoader() {
    this.showLoader = false;
  }

  beforeGettingImages() {
    this.startLoader();
    this.noResults = false;
    this.isError = false;
  }

  getImages() {
    this.beforeGettingImages();

    return this.$http({
      method: 'GET',
      url: 'https://unsplash.com/napi/search',
      params: {
        page: this.currentPage,
        query: this.searchQuery
      },
      headers: {
        'authorization': "Bearer 73e3ec998433703037035b7132f79ff1dd4525a4578ae9d94af0d1ded6d1b1f9"
      }
    }).then((httpResponse) => {
      this.stopLoader();
      this.allImages = httpResponse.data.photos.results;
      this.noResults = ! this.allImages.length;
      return httpResponse;
    }, (error) => {
      this.$log.error('Error: ', error);
      this.isError = true;
      this.stopLoader();
      throw error;
    });
  }

  onSearchImagesClickHandler() {
    if(! this.searchQuery) return false;

    return this.getImages().then( (httpResponse) => {
      this.allPhotosCount = httpResponse.data.photos.total;
      this.allImages = httpResponse.data.photos.results;
      this.searchTerm = angular.copy(this.searchQuery);

      this.numOfPages = Math.ceil(this.allPhotosCount / this.perPageCount);
    });
  }

  onNextPageClickHandler() {
    this.currentPage ++;
    this.getImages();
  }

  onPrevPageClickHandler() {
    this.currentPage --;
    this.getImages();
  }

  resetForm() {
    this.searchQuery = '';
    this.$scope.searchImageForm.$setPristine();
  }

}
