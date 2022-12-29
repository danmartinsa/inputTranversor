import * as testModel from "./models/dataModel";
import * as method from "./models/controllers"


let y = new method.newTest(1090, "abc", "cde")
y.addDomain(1, "abc", "abc")
y.addDomain(2, "cde", "cde")
y.addTestEnvironment(1, "Validation", "")
y.addTestEnvironment(2, "Development", "")
y.addOutputDatasets(109001, "KolmogorovSmirnov_v1", 109001, "EVS/Raptor/ConformedDatasets/KolmogorovSmirnov_v1")
y.addDatsetSchema(0, "http://json-schema.org/draft-04/schema#", "object", ["test1", "test2"])


let i1 = new method.NewItem("array")
let i2 = new method.NewItem("object")
let i3 = new method.NewItem("number")


let proper1 = new method.NewProperty("KSTestResults")
let proper2 = new method.NewProperty("PValue")
let proper3 = new method.NewProperty("KSStatisc")


proper2.addItem(i3.NewItem, "PValue")

proper3.addItem({ type: "number" }, "KSStatisc")

i1.addItem(i2.NewItem)
i2.addProperty(proper2.NewProperty)
i2.addProperty(proper3.NewProperty)

proper1.addItem(i1.NewItem, "KSTestResults")

y.addProperty(0, proper1.NewProperty)
// console.log(proper1.NewProperty.KSTestResults.items?.properties)
console.log(JSON.stringify(y, null, 4));


