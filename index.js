class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Measures of Central Tendency
    mean() {
      const sum = this.data.reduce((acc, value) => acc + value, 0);
      return sum / this.data.length;
    }
  
    median() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const middle = Math.floor(sortedData.length / 2);
  
      if (sortedData.length % 2 === 0) {
        return (sortedData[middle - 1] + sortedData[middle]) / 2;
      } else {
        return sortedData[middle];
      }
    }
  
    mode() {
      const frequencyMap = new Map();
  
      this.data.forEach((value) => {
        frequencyMap.set(value, (frequencyMap.get(value) || 0) + 1);
      });
  
      let maxFrequency = 0;
      let modes = [];
  
      frequencyMap.forEach((frequency, value) => {
        if (frequency > maxFrequency) {
          maxFrequency = frequency;
          modes = [value];
        } else if (frequency === maxFrequency) {
          modes.push(value);
        }
      });
  
      return modes;
    }
  
    // Measures of Dispersion
    range() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    variance() {
      const mean = this.mean();
      const squaredDifferences = this.data.map((value) => Math.pow(value - mean, 2));
      return squaredDifferences.reduce((acc, value) => acc + value, 0) / this.data.length;
    }
  
    standardDeviation() {
      return Math.sqrt(this.variance());
    }
  
    meanDeviation() {
      const mean = this.mean();
      return this.data.reduce((acc, value) => acc + Math.abs(value - mean), 0) / this.data.length;
    }
  
    quartileDeviation() {
      const q1 = this.percentile(25);
      const q3 = this.percentile(75);
      return (q3 - q1) / 2;
    }
  
    percentile(percent) {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const index = Math.ceil((percent / 100) * sortedData.length) - 1;
      return sortedData[index];
    }
  }
 
  //Here's an example 
  const data = [11, 18, 7, 5, 10, 1, 15, 6, 10, 12];
  const stats = new DescriptiveStatistics(data);
  
  console.log("Mean:", stats.mean());
  console.log("Median:", stats.median());
  console.log("Mode:", stats.mode());
  console.log("Range:", stats.range());
  console.log("Variance:", stats.variance());
  console.log("Standard Deviation:", stats.standardDeviation());
  console.log("Mean Deviation:", stats.meanDeviation());
  console.log("Quartile Deviation:", stats.quartileDeviation());
  