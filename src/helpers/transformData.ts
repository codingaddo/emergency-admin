import { format, parseISO } from "date-fns";

interface Report {
  agency: string;
  sender: string;
  status: string;
  description: string;
  mediaUrl?: string;
  coordinates: number[];
  locationName: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

interface TransformedData {
  month: string;
  count: number;
}

interface PieChartData {
  name: string;
  value: number;
}

export const transformLineChartData = (reports: Report[]) => {
  const dateCountMap: { [key: string]: number } = {};

  reports.forEach((report) => {
    const date = format(new Date(report.createdAt), "yyyy-MM");
    dateCountMap[date] = (dateCountMap[date] || 0) + 1;
  });

  return Object.entries(dateCountMap).map(([date, count]) => ({
    date,
    count,
  }));
};

export const transformPieChartDataByMonth = (
  reports: Report[]
): PieChartData[] => {
  const monthCountMap: { [key: string]: number } = {};

  reports.forEach((report) => {
    const date = parseISO(report.createdAt);
    const month = format(date, "MMM ");
    monthCountMap[month] = (monthCountMap[month] || 0) + 1;
  });

  return Object.entries(monthCountMap).map(([name, value]) => ({
    name,
    value,
  }));
};

// Transform data for area chart by month with full month names
export const transformAreaChartDataByMonth = (
  reports: Report[]
): TransformedData[] => {
  const monthCountMap: { [key: string]: number } = {};

  reports.forEach((report) => {
    const date = parseISO(report.createdAt);
    const month = format(date, "yyyy-MM");
    monthCountMap[month] = (monthCountMap[month] || 0) + 1;
  });

  return Object.entries(monthCountMap)
    .map(([month, count]) => {
      // Convert "yyyy-MM" to "Month YYYY" format
      const [year, monthNumber] = month.split("-");
      const monthName = format(new Date(`${year}-${monthNumber}-01`), "MMM ");

      return {
        month: monthName,
        count,
      };
    })
    .sort((a, b) => {
      const dateA = new Date(a.month);
      const dateB = new Date(b.month);
      return dateA.getTime() - dateB.getTime();
    });
};
