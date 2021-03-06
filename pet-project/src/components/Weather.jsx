import _ from 'lodash';
import React from 'react';
import { WEEK_S } from '../CONST/Const'
import { WeatherData, WeatherToday, FirstColumn, SecondColumn, FourthColumn, WeatherWeek, WeatherCard } from '../Style/weather'


function Weather({ loading, nameHead, data }) {

  return <>
    {!loading &&
      <WeatherData>
        <span >
          Weather in <b>{nameHead}</b>
        </span>
        <WeatherToday>
          <FirstColumn>
            <span>{_.head(data).day.avgtemp_c > 0 ? '+' + _.floor(_.head(data).day.avgtemp_c) : _.floor(_.head(data).day.avgtemp_c)}°</span>
            <img src={_.head(data).day.condition.icon} alt={_.head(data).day.condition.text} />
          </FirstColumn>
          <SecondColumn>
            <span>{_.head(data).day.condition.text}</span>
            <div>
              <span>max <b>{_.head(data).day.maxtemp_c > 0 ? '+' + _.floor(_.head(data).day.maxtemp_c) : _.floor(_.head(data).day.maxtemp_c)}</b></span>
              <span>min <b>{_.head(data).day.mintemp_c > 0 ? '+' + _.floor(_.head(data).day.mintemp_c) : _.floor(_.head(data).day.mintemp_c)}</b></span>
            </div>
          </SecondColumn>
          <div>
            <span>Wind speed  <b>{(_.head(data).day.maxwind_kph / 3.6).toFixed(1)} m/s</b></span>
          </div>
          <FourthColumn>
            <span>{_.head(data).day.daily_chance_of_rain} %</span>
            <span>{_.head(data).day.daily_chance_of_snow} %</span>
          </FourthColumn>
        </WeatherToday>

        <WeatherWeek>
          {!loading && <>
            {
              _.map(data, (item, index) =>
                <div key={index}>
                  <div>
                    {index === 0 ?
                      'Today'
                      : `${WEEK_S[new Date(item.date).getDay()]}, ${new Date(item.date).getDate()} `}
                  </div>
                  <WeatherCard>
                    <div>
                      <span>{item.day.maxtemp_c > 0 ? '+' + _.floor(item.day.maxtemp_c) : _.floor(item.day.maxtemp_c)}°</span>
                      <span>{item.day.mintemp_c > 0 ? '+' + _.floor(item.day.mintemp_c) : _.floor(item.day.mintemp_c)}°</span>
                    </div>
                    <img src={item.day.condition.icon} alt={item.day.condition.text} />
                  </WeatherCard>
                </div>)
            }
          </>
          }

        </WeatherWeek>
      </WeatherData>
    }
  </>

}

export default Weather;
