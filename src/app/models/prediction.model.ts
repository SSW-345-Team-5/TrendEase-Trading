export interface Prediction {
    success: boolean;
    error?: PredictionError;
    signal: 'BUY' | 'SELL' | 'HOLD';
    prediction_proba: number[][];
    prediction: number[];
    prediction_time: number;
    symbol: string;
}

interface PredictionError {
    message: string;
    type: string;
}