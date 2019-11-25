/**
 * Create Selectors
 */

// Get a offer
export const makeSelectOffer = (allOffers, offerId) => {
  if (allOffers.length === 0) return [];

  return allOffers.filter(offer => offer.id === offerId);
};
