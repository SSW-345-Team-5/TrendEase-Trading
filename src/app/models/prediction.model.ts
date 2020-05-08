export interface Prediction {
    signal: 'buy' | 'sell' | 'hold';
    success: boolean;
}