import { extractDomain, checkValidUrl } from '../settingsHelper';

describe('SettingsHelper', () => {
  describe('extractDomain', () => {
    it('should return the domain from a https url', () => {
      const url = 'https://www.cs.digitalservice.id';
      const domain = extractDomain({ url });
      expect(domain).toEqual('cs.digitalservice.id');
    });

    it('should return the domain', () => {
      const url = 'cs.digitalservice.id';
      const domain = extractDomain({ url });
      expect(domain).toEqual('cs.digitalservice.id');
    });

    it('should return the domain from subdomain 1', () => {
      const url = 'https://cs.digitalservice.id';
      const domain = extractDomain({ url });
      expect(domain).toEqual('cs.digitalservice.id');
    });

    it('should return the domain from subdomain 2', () => {
      const url = 'https://mobile.chatwoot.app';
      const domain = extractDomain({ url });
      expect(domain).toEqual('mobile.chatwoot.app');
    });

    it('should return true for valid url 3', () => {
      const url = 'mobile.chatwoot.app';
      const domain = extractDomain({ url });
      expect(domain).toEqual('mobile.chatwoot.app');
    });

    it('should return the domain from subdomain 4', () => {
      const url = 'subdomain.domain.tld';
      const domain = extractDomain({ url });
      expect(domain).toEqual('subdomain.domain.tld');
    });

    it('should return the domain from subdomain 5', () => {
      const url = 'sub1.sub2.domain.tld';
      const domain = extractDomain({ url });
      expect(domain).toEqual('sub1.sub2.domain.tld');
    });
  });

  describe('checkValidUrl', () => {
    it('should return true for valid url 1', () => {
      const url = 'https://www.chatwoot.com';
      const domain = checkValidUrl({ url });
      expect(domain).toEqual(true);
    });

    it('should return true for valid url 2', () => {
      const url = 'http://.chatwoot.com';
      const domain = checkValidUrl({ url });
      expect(domain).toEqual(true);
    });

    it('should return true for valid url 4', () => {
      const url = 'ht://cs.digitalservice.id';
      const domain = checkValidUrl({ url });
      expect(domain).toEqual(true);
    });

    it('should return false for invalid url 1', () => {
      const url = 'cs.digitalservice.id';
      const domain = checkValidUrl({ url });
      expect(domain).toEqual(false);
    });

    it('should return false for invalid url 2', () => {
      const url = 'mobile.chatwoot.app';
      const domain = checkValidUrl({ url });
      expect(domain).toEqual(false);
    });
  });
});
