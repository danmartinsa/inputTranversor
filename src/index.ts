import * as testModel from "./models/testDef";

// let x: testModel.TestDef =
// {
//     testId: 1090,
//     testCategory: "Quantitative",
//     testName: "Kolmogorov-Smirnovgl",
// }


export class newTest {
    newTest: testModel.TestDef

    constructor(testId: number, testCategoy: string, testName: string) {
        this.newTest = {
            testId: testId,
            testCategory: testCategoy,
            testName: testName,
        }
    }

    addDomain(id: number, name: string, description: string): void {
        let testDomain: testModel.TestDomain = {
            "domainId": id,
            "domainName": name,
            "domainDescription": description,
        }
        if (this.newTest.testDomains == undefined) {
            this.newTest.testDomains = new Array(testDomain)
        } else {
            this.newTest.testDomains.push(testDomain)
        }
    }
    addTestEnvironment(id: number, name: string, description: string) {
        let testEnvironment: testModel.TestEnvironment = {
            "environmentId": id,
            "environmentName": name,
            "environmentDescription": description
        }

        if (this.newTest.testEnvironments == undefined) {
            this.newTest.testEnvironments = new Array(testEnvironment)
        } else {
            this.newTest.testEnvironments.push(testEnvironment)
        }
    }

    addOutputDatasets(outputId: number,
        outputName: string,
        conformedId: number,
        conformedName: string) {

        let outputDataset: testModel.OutputDataset = {
            outputDatasetId: outputId,
            outputDatasetName: outputName,
            conformedDatasetId: conformedId,
            conformedDatasetName: conformedName
        };
        if (this.newTest.outputDatasets == undefined) {
            this.newTest.outputDatasets = new Array(outputDataset);
        } else {
            this.newTest.outputDatasets.push(outputDataset);
        };
    }

    addDatsetSchema(n: number, schema: string, type: string, required: string[]) {

        let datasetSchema: testModel.DatasetSchema = {
            $schema: schema,
            type: type
        };
        if (required.length > 0) {
            datasetSchema.required = required
        };
        if (this.newTest.outputDatasets != undefined) {
            this.newTest.outputDatasets[n].datasetSchema = datasetSchema
        }
    }

    addProperty(n: number, property: testModel.Properties) {

        if ((this.newTest.outputDatasets != undefined) && (this.newTest.outputDatasets[n].datasetSchema != undefined)) {
            this.newTest.outputDatasets[n].datasetSchema!.properties = property
        }
    }



}

export class NewProperty {
    NewProperty: testModel.Properties;

    constructor(name: string) {
        this.NewProperty = {}
        var itemPlaceFolder: testModel.Item = { type: "" }
        this.NewProperty[name] = itemPlaceFolder
    }

    addItem(item: testModel.Item, property: string) {
        if (this.NewProperty[property].type == "") {
            this.NewProperty[property] = item
        } else {
            this.NewProperty[property] = { ...this.NewProperty[property], ...item }
        }
    }
}

export class NewItem {
    NewItem: testModel.Item;

    constructor(type: string) {
        this.NewItem = {
            type: type
        }
    }

    addProperty(property: testModel.Properties) {
        if (this.NewItem.properties == undefined) {
            this.NewItem.properties = property
        } else {
            this.NewItem.properties = { ...this.NewItem.properties, ...property }
        }
    }

    addItem(item: testModel.Item) {
        this.NewItem.items = item
    }

    //TODO AddRequirement

}

export class newDatasetInterpretation {
    NewDatasetInterpretation: testModel.DatasetInterpretation

    constructor() {
        this.NewDatasetInterpretation = {}
    }

    addCalculations(calculation: testModel.Calculation) {

        if (this.NewDatasetInterpretation.Calculations == undefined) {
            this.NewDatasetInterpretation.Calculations = new Array(calculation)
        } else {
            this.NewDatasetInterpretation.Calculations.push(calculation)
        }
    }

    addInterPretationsText(textItem: testModel.InterpretationTextDefinition) {

        if (this.NewDatasetInterpretation.InterpretationTextDefinition == undefined) {
            this.NewDatasetInterpretation.InterpretationTextDefinition = new Array(textItem)
        } else {
            this.NewDatasetInterpretation.InterpretationTextDefinition.push(textItem)
        }
    }

}

export class NewCalculation {
    NewCalculation: testModel.Calculation;

    constructor(calculationName: string,
        calculationType: string,
        collectionLocation: string,
        evaluationAttribute: string,
        itemPopulationAttribute: string,
        thresholdDefinitionLocation: string,
        thresholdLabelAttribute: string,
        onMissingInput: string,
        onException: string) {


        this.NewCalculation = {
            calculationName: calculationName,
            calculationType: calculationType,
            collectionLocation: collectionLocation,
            evaluationAttribute: evaluationAttribute,
            itemPopulationAttribute: itemPopulationAttribute,
            thresholdDefinitionLocation: thresholdDefinitionLocation,
            thresholdLabelAttribute: thresholdLabelAttribute,
            onMissingInput: onMissingInput,
            onException: onException
        }
    }

}

export class NewInterpretationTextDefinition {
    NewInterpretationTextDefinition: testModel.InterpretationTextDefinition;

    constructor(level: testModel.LevelOfDetail) {
        this.NewInterpretationTextDefinition = {
            LevelOfDetail: level
        }
    }

    addTextDefinition(textDefinition: testModel.TextDefinition) {

        if (this.NewInterpretationTextDefinition.TextDefinition == undefined) {
            this.NewInterpretationTextDefinition.TextDefinition = new Array(textDefinition)
        } else {
            this.NewInterpretationTextDefinition.TextDefinition.push(textDefinition)
        }
    }
}

export class newTextDefinition {
    NewTextDefinition: testModel.TextDefinition

    constructor(type: testModel.TypeEnum) {
        this.NewTextDefinition = {
            Type: type,
            Conditions: []
        }
    }

    addIterationsDelimiter(delimiter: string) {
        this.NewTextDefinition.IterationDelimiter = delimiter
    }

    addIterationsFinalDelimiter(delimiter: string) {
        this.NewTextDefinition.IterationFinalDelimiter = delimiter
    }

    addNewLineAfterEachItem(newLine: string) {
        this.NewTextDefinition.NewLineAfterEachItem = newLine
    }

    addTextTemplate(text: string) {
        this.NewTextDefinition.TextTemplate = text
    }

    addConditionsOnEachIteration(conditions: testModel.ConditionsOnEachIteration) {
        if (this.NewTextDefinition.ConditionsOnEachIteration == undefined) {
            this.NewTextDefinition.ConditionsOnEachIteration = new Array(conditions)
        } else {
            this.NewTextDefinition.ConditionsOnEachIteration.push(conditions)
        }
    }

    addCollectionLocation(collection: testModel.CollectionLocation) {
        this.NewTextDefinition.CollectionLocation = collection
    }

    addIterationTypeText(type: testModel.IterationTextType) {
        this.NewTextDefinition.IterationTextType = type
    }

    addIterativeReplacements(replacement: testModel.IterativeReplacement) {

        if (this.NewTextDefinition.IterativeReplacements == undefined) {
            this.NewTextDefinition.IterativeReplacements = new Array(replacement)
        } else {
            this.NewTextDefinition.IterativeReplacements.push(replacement)
        }
    }
}

export class NewConditionsOnEachIteration {
    NewConditionsOnEachIteration: testModel.ConditionsOnEachIteration;

    constructor(conditionType: testModel.ConditionType,
        evaluationAttribute: testModel.ConditionsOnEachIterationEvaluationAttribute,
        conditionLinkage: testModel.ConditionLinkage) {

        this.NewConditionsOnEachIteration = {
            ConditionType: conditionType,
            EvaluationAttribute: evaluationAttribute,
            ConditionLinkage: conditionLinkage
        }
    }

    addEqualValue(level: testModel.LevelOfDetail) {
        this.NewConditionsOnEachIteration.EqualValue = level
    }
}



let y = new newTest(1090, "abc", "cde")
y.addDomain(1, "abc", "abc")
y.addDomain(2, "cde", "cde")
y.addTestEnvironment(1, "Validation", "")
y.addTestEnvironment(2, "Development", "")
y.addOutputDatasets(109001, "KolmogorovSmirnov_v1", 109001, "EVS/Raptor/ConformedDatasets/KolmogorovSmirnov_v1")
y.addDatsetSchema(0, "http://json-schema.org/draft-04/schema#", "object", ["test1", "test2"])


let i1 = new NewItem("array")
let i2 = new NewItem("object")
let i3 = new NewItem("number")


let proper1 = new NewProperty("KSTestResults")
let proper2 = new NewProperty("PValue")
let proper3 = new NewProperty("KSStatisc")


proper2.addItem(i3.NewItem, "PValue")

proper3.addItem({ type: "number" }, "KSStatisc")

i1.addItem(i2.NewItem)
i2.addProperty(proper2.NewProperty)
i2.addProperty(proper3.NewProperty)

proper1.addItem(i1.NewItem, "KSTestResults")

y.addProperty(0, proper1.NewProperty)
// console.log(proper1.NewProperty.KSTestResults.items?.properties)
console.log(JSON.stringify(y, null, 4));


