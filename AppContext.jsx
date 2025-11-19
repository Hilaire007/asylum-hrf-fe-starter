import { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
//import testData from '../data/test_data.json';
import { useLocalStorage } from '../hooks/useLocalStorage.js';

const AppContext = createContext({});

/**
 * TODO: Ticket 2:
 * - Use axios to fetch the data
 * - Store the data
 * - Populate the graphs with the stored data
 */
const useAppContextProvider = () => {
  const [graphData, setGraphData] = useState(null);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const [error, setError] = useState(null);

  const BASE_URL = 'https://asylum-be.onrender.com';

  useLocalStorage({ graphData, setGraphData });

  const getFiscalData = async () => {
    // TODO: Replace this with functionality to retrieve the data from the fiscalSummary endpoint
    try {
      const { data } = await axios.get(`${BASE_URL}/fiscalSummary`);
      return data;
    } catch (error) {
      console.error('Error fetching fiscal year data:', error);
      return null;
    }
  };

  const getCitizenshipResults = async () => {
    // TODO: Replace this with functionality to retrieve the data from the citizenshipSummary endpoint
    try {
      const { data } = await axios.get(`${BASE_URL}/citizenshipSummary`);
      return data;
    } catch (error) {
      console.error('Error fetching citizenship data:', error);
      return null;
    }
  };

  const updateQuery = async () => {
    setIsDataLoading(true);
  };

  const fetchData = async () => {
    // TODO: fetch all the required data and set it to the graphData state
    try {
      const [fiscalData, citizenshipData] = await Promise.all([getFiscalData(), getCitizenshipResults()]);

      if (fiscalData && citizenshipData) {
        const combinedData = {
          ...fiscalData,
          getCitizenshipResults: citizenshipData.getCitizenshipResults || [],
        };
        setGraphData(combinedData);
        setError(null);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsDataLoading(false);
    }
  };

  const clearQuery = () => {
    setGraphData({});
  };

  const getYears = () => graphData?.yearResults?.map(({ fiscal_year }) => Number(fiscal_year)) ?? [];

  useEffect(() => {
    if (isDataLoading) {
      fetchData();
    }
  }, [isDataLoading]);

  return {
    graphData,
    setGraphData,
    isDataLoading,
    updateQuery,
    error,
    fetchData,
    clearQuery,
    getYears,
  };
};

export function useAppContext() {
  return useContext(AppContext);
}

export function ProvideAppContext({ children }) {
  const contextValue = useAppContextProvider();

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
