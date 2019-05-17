import { Injectable } from '@nestjs/common';
import Axios, { AxiosResponse } from 'axios';
import { ICheapSharkResponse } from './interfaces/cheapSharkResponse.interface';
import { IGame } from './interfaces/game.interface';

@Injectable()
export class GameService {

  /**
   * Returns list of games
   */
  public async getGames(): Promise<ICheapSharkResponse[]> {
    const gamesList = await this.fetchGameInfo();
    return gamesList.data;
  }

  /**
   * Return deal info for game defined by delId
   * @param dealId Id of the deal to fetch
   */
  private async getDeal(dealId: string): Promise<IGame> {
    const deal = await this.fetchGameDeal(dealId);
    const data = deal.data;
    return {
      name: data.gameInfo.name,
      salePrice: parseFloat(data.gameInfo.salePrice),
      cheapestPrice: parseFloat(data.cheapestPrice.price),
      releaseDate: new Date(data.gameInfo.releaseDate * 1000),
    };
  }

  public async getDeals(): Promise<IGame[]> {
    const gamesList = await this.getGames();
    const dealIds = gamesList.map(e => e.dealID);
    const deals = await Promise.all(dealIds.map(e => this.getDeal(e)));    
    return deals;
  }

  private async fetchGameDeal(dealId: string): Promise<AxiosResponse> {
    const res = await Axios.get('http://www.cheapshark.com/api/1.0/deals?id=' + dealId);
    if (res.status === 200) {
      return res;
    }
    throw new Error('Error fetching deals data');
  }

  private async fetchGameInfo(): Promise<AxiosResponse> {
    const res = await Axios.get('http://www.cheapshark.com/api/1.0/deals?storeID=1&desc=0&title=grand%20theft%20auto&pageSize=20');
    if (res.status === 200) {
      return res;
    }
    throw new Error('Error fetching games data');
  }
}
