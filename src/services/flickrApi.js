import axiosClient from './index';
import config from '../config';

// https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1
class FlickrApi {
  constructor () {
    this.apiKey = config.apiKey;
  }

  search = (params) => {
    const url = '';
    return axiosClient.get(url, { params });
  }

  searchImage = (query) => {
    const params = {
      method: 'flickr.photos.search',
      api_key: this.apiKey,
      tags: query,
      per_page: 24,
      format: 'json',
      nojsoncallback: 1
    };

    return axiosClient.get('', { params });
  }
}

const flickrApi = new FlickrApi();
export default flickrApi;
