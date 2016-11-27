export class SearchImageController {
  constructor($http) {
    'ngInject';

    this.$http = $http;
    this.allImages = [];
    this.searchQuery = '';
  }

  getImages(){
    return this.$http({
      method: 'GET',
      url: 'https://unsplash.com/napi/search',
      params: {
        page: 1,
        query: 'mountain',
        count: 10
      },
      headers: {
        'authorization': "Bearer 73e3ec998433703037035b7132f79ff1dd4525a4578ae9d94af0d1ded6d1b1f9"
      }
    });
  }

  searchImages() {
    if(! this.searchQuery) return false;

    this.getImages().then(function (response) {
      console.log(response.data);
    });
  }
}
