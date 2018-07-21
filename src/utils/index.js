import {
  curry,
  pipe,
  map,
  propOr,
  join,
  compose,
  juxt,
  toUpper,
  head,
  tail,
  sortBy,
  split,
  path
} from "ramda";

export const buildImageUrl = curry((w, h, url) =>
  url.replace(/\[w\]/g, w).replace(/\[h\]/g, h)
);
export const capatilize = compose(
  join(""),
  juxt([
    compose(
      toUpper,
      head
    ),
    tail
  ])
);
export const getLocalizedProp = curry((locale, obj, prop) =>
  propOr(propOr("", `${prop}${locale}`, obj), prop, obj)
);

export const getLocalizedCarName = curry((locale, props, obj) =>
  pipe(
    map(getLocalizedProp(locale, obj)),
    join(" ")
  )(props)
);

export const buildCarProps = curry((locale, carData) => ({
  image: buildImageUrl(300, 300, carData.image),
  name: getLocalizedCarName(
    capatilize(locale),
    ["make", "model", "year"],
    carData
  ),
  price: carData.AuctionInfo.currentPrice,
  currency: getLocalizedProp(
    capatilize(locale),
    carData.AuctionInfo,
    "currency"
  ),
  bids: carData.AuctionInfo.bids,
  lot: carData.AuctionInfo.lot,
  endDate: carData.AuctionInfo.endDate
}));

export const sortCars = by => sortBy(path(split(".", by)));

export const searchCars = curry((locale, query, cars) =>
  cars.filter(car =>
    getLocalizedCarName(capatilize(locale), ["make", "model"], car)
      .toLowerCase()
      .includes(query.toLowerCase())
  )
);
