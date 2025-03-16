export interface AppSettings {
    donation: DonationSettings;
}

export interface DonationSettings {
    enabled: boolean;
    paypalLink: string;
}
