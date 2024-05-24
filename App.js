import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

const FinancialOverview = ({ iconUri, title }) => (
  <View style={styles.financialContainer}>
    <Image resizeMode="auto" source={{ uri: iconUri }} style={styles.financialIcon} />
    <View style={styles.financialTextContainer}>
      <Text>{title}</Text>
    </View>
  </View>
);

function MyComponent() {
  const financialData = [
    { id: '1', iconUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a128b24d38ed8bd281cb7fd6f22065677cd8560619cd97ab25302e0fb0a7546?apiKey=c1eea401fc714419be3d7029422e217c&", title: "Month" },
    { id: '2', iconUri: "https://cdn.builder.io/api/v1/image/assets/TEMP/7a128b24d38ed8bd281cb7fd6f22065677cd8560619cd97ab25302e0fb0a7546?apiKey=c1eea401fc714419be3d7029422e217c&", title: "Transaction" }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.statusBar}>
          <Text>9:41</Text>
        </View>
        <Image resizeMode="auto" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/20a5b7687218e1b919dc0ce8d016a520399cf9dfee76889972c15a8adf60bdaf?apiKey=c1eea401fc714419be3d7029422e217c&"}} style={styles.headerIcon} />
      </View>
      
      <View style={styles.reportContainer}>
        <Image resizeMode="auto" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/4aecd2b4492c6783f92c1b00fd1017ef56936fc8b921f5765a78b5dd28d6b1bb?apiKey=c1eea401fc714419be3d7029422e217c&"}} style={styles.reportIcon} />
        <Text>Financial Report</Text>
      </View>
      
      {financialData.map((data) => (
        <FinancialOverview key={data.id} iconUri={data.iconUri} title={data.title} />
      ))}

      <View style={styles.incomeExpenseToggle}>
        <Text style={styles.incomeExpenseText}>Expense</Text>
        <Text style={styles.incomeExpenseActiveText}>Income</Text>
      </View>

      <View style={styles.transactionDetail}>
        <Image resizeMode="auto" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/89ad7c2aad563acbdb78901de9ab2da1bce30816b5cd44c0439c595cc0a88af6?apiKey=c1eea401fc714419be3d7029422e217c&"}} style={styles.transactionIcon} />
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionTitle}>Salary</Text>
          <Text style={styles.transactionSubtitle}>Salary for July</Text>
        </View>
        <View style={styles.transactionAmount}>
          <Text style={styles.transactionIncomeText}>+ $5000</Text>
          <Text style={styles.transactionTime}>04:30 PM</Text>
        </View>
      </View>

      <View style={styles.transactionDetail}>
        <Image resizeMode="auto" source={{ uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/0be8508e776f1133880594b09083c7ce283ba0e7f5923106703f5121a93e77ff?apiKey=c1eea401fc714419be3d7029422e217c&"}} style={styles.transactionIcon} />
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionTitle}>Passive Income</Text>
          <Text style={styles.transactionSubtitle}>UI8 Sales</Text>
        </View>
        <View style={styles.transactionAmount}>
          <Text style={styles.transactionIncomeText}>+ $1000</Text>
          <Text style={styles.transactionTime}>08:30 PM</Text>
        </View>
      </View>

      <View style={styles.footerIndicator} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    maxWidth: 480,
    width: "100%",
    paddingBottom: 8,
    flexDirection: "column",
    alignItems: "stretch",
    margin: "0 auto",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 16,
  },
  statusBar: {
    fontFamily: "Inter, sans-serif",
  },
  headerIcon: {
    width: 67,
    height: 67,
  },
  reportContainer: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  reportIcon: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  financialContainer: {
    flexDirection: "row",
    padding: 16,
    alignItems: "center",
  },
  financialIcon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  financialTextContainer: {
    fontFamily: "Inter, sans-serif",
  },
  incomeExpenseToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 8,
    padding: 4,
    borderRadius: 32,
    backgroundColor: "#F1F1FA",
  },
  incomeExpenseText: {
    marginRight: 8,
    fontFamily: "Inter, sans-serif",
  },
  incomeExpenseActiveText: {
    backgroundColor: "#7F3DFF",
    color: "#FCFCFC",
    borderRadius: 32,
    paddingVertical: 15,
    paddingHorizontal: 55,
  },
  transactionDetail: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 24,
    backgroundColor: "#FCFCFC",
    marginVertical: 8,
    padding: 15,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: "#E3E5E5",
    marginRight: 9,
    padding: 10,
  },
  transactionInfo: {
    flex: 1,
  },
  transactionTitle: {
    fontFamily: "Inter, sans-serif",
    fontSize: 16,
  },
  transactionSubtitle: {
    color: "#91919F",
    marginTop: 13,
    fontSize: 13,
  },
  transactionAmount: {
    alignItems: 'flex-end',
  },
  transactionIncomeText: {
    color: "#00A86B",
    fontSize: 16,
  },
  transactionTime: {
    color: "#91919F",
    marginTop: 12,
    fontSize: 13,
  },
  footerIndicator: {
    backgroundColor: "#000",
    width: 134,
    height: 5,
    borderRadius: 100,
    alignSelf: "center",
    marginVertical: 125,
  },
});