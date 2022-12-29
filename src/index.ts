import * as testModel from "./models/dataModel";
import * as method from "./models/controllers"

const ks = new method.newTest(1090, "Quantitative", "Kolmogorov-Smirnov")
ks.addDomain(2,
    "Market Risk",
    "Market risk models, VAR, CVAR, SVAR, counterparty exposure risk, CVA, XVA, margin risk, SIMM etc."
);

ks.addDomain(4,
    "Asset/Wealth Management",
    "ALM models, portfolio management and optimization models, treasury management models, investment strategy models, pension risk models, customer target models etc."
);

ks.addTestEnvironment(1, "Validation", "");
ks.addTestEnvironment(2, "On-going Monitoring", "");
ks.addTestEnvironment(3, "Development", "");


// create Outputdataset and DatasetSchema to add to test
let ksOutputDataset = new method.NewOutputDataset(
    109001,
    "KolmogorovSmirnov_v1",
    109001,
    "EVS/Raptor/ConformedDatasets/KolmogorovSmirnov_v1"
)

let ksDatasetSchema = new method.NewDatasetSchema(
    "http://json-schema.org/draft-04/schema#",
    "object"
)

ksOutputDataset.addDatasetSchema(ksDatasetSchema.NewDatasetSchema)
ks.addOutputDataset(ksOutputDataset.NewOutputDataset)

//Create Properties and items
let ksTestResult = new method.NewProperty("KSTestResults")
let itemsKsTestResult = new method.NewItem("array")
let itemsKsTestResult_nivel2 = new method.NewItem("object")
// let itemsKsTestResult_nivel3: testModel.Properties[] = []

const lastProperty = (name: string, type: string): testModel.Properties => {
    var itemType: testModel.Item = { type: type }
    var property: testModel.Properties = {}
    property[name] = itemType
    return property
}

var itemsKsTestResult_nivel3 = lastProperty("PValue", "number")


itemsKsTestResult.addItem(itemsKsTestResult_nivel2.NewItem)
itemsKsTestResult_nivel2.addProperty(itemsKsTestResult_nivel3)
// itemsKsTestResult_nivel2.addProperty()

ksTestResult.addItem(itemsKsTestResult.NewItem, "KSTestResults")


// y.addProperty(0, proper1.NewProperty)
// console.log(proper1.NewProperty.KSTestResults.items?.properties)
console.log(JSON.stringify(ksTestResult.NewProperty, null, 4));


