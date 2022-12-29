import * as testModel from "./dataModel";

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

    // addOutputDatasets(outputId: number,
    //     outputName: string,
    //     conformedId: number,
    //     conformedName: string) {

    //     let outputDataset: testModel.OutputDataset = {
    //         outputDatasetId: outputId,
    //         outputDatasetName: outputName,
    //         conformedDatasetId: conformedId,
    //         conformedDatasetName: conformedName
    //     };
    //  V   if (this.newTest.outputDatasets == undefined) {
    //         this.newTest.outputDatasets = new Array(outputDataset);
    //     } else {
    //         this.newTest.outputDatasets.push(outputDataset);
    //     };
    // }

    addOutputDataset(outputDataset: testModel.OutputDataset) {
        if (this.newTest.outputDatasets == undefined) {
            this.newTest.outputDatasets = new Array(outputDataset);
        } else {
            this.newTest.outputDatasets.push(outputDataset);
        };
    }

    // addDatsetSchema(n: number, schema: string, type: string, required: string[]) {

    //     let datasetSchema: testModel.DatasetSchema = {
    //         $schema: schema,
    //         type: type
    //     };
    //     if (required.length > 0) {
    //         datasetSchema.required = required
    //     };
    //     if (this.newTest.outputDatasets != undefined) {
    //         this.newTest.outputDatasets[n].datasetSchema = datasetSchema
    //     }
    // }

    // addProperty(n: number, property: testModel.Properties) {

    //     if ((this.newTest.outputDatasets != undefined) && (this.newTest.outputDatasets[n].datasetSchema != undefined)) {
    //         this.newTest.outputDatasets[n].datasetSchema!.properties = property
    //     }
    // }
}

export class NewOutputDataset {
    NewOutputDataset: testModel.OutputDataset;

    constructor(outputId: number,
        outputName: string,
        conformedId: number,
        conformedName: string) {
        this.NewOutputDataset = {
            outputDatasetId: outputId,
            outputDatasetName: outputName,
            conformedDatasetId: conformedId,
            conformedDatasetName: conformedName
        }
    }

    addDatasetSchema(datasetSchema: testModel.DatasetSchema) {
        this.NewOutputDataset.datasetSchema = datasetSchema
    }

    addDatasetInterpretation(datasetInterpretation: testModel.DatasetInterpretation) {
        this.NewOutputDataset.datasetInterpretation = datasetInterpretation
    }

    addVisualComponent(visualComponent: testModel.VisualComponent) {
        if (this.NewOutputDataset.visualComponents == undefined) {
            this.NewOutputDataset.visualComponents = new Array(visualComponent);
        } else {
            this.NewOutputDataset.visualComponents.push(visualComponent);
        };
    }

}

export class NewDatasetSchema {
    NewDatasetSchema: testModel.DatasetSchema;

    constructor(schema: string, type: string) {
        this.NewDatasetSchema = {
            $schema: schema,
            type: type
        }
    }

    addProperty(property: testModel.Properties) {
        this.NewDatasetSchema.properties = property
    }

    addRequired(requiredList: string[]) {
        this.NewDatasetSchema.required = requiredList
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

export class NewIterativeReplacement {
    NewIterativeReplacement: testModel.IterativeReplacement;

    constructor(placeholderText: testModel.PlaceholderText,
        valueJsonPath: testModel.EvaluationAttribute,
        dataType: testModel.Type
    ) {
        this.NewIterativeReplacement = {
            PlaceholderText: placeholderText,
            ValueJSONPath: valueJsonPath,
            DataType: dataType
        }
    }

    addDataFormat(data: testModel.DataFormat) {
        this.NewIterativeReplacement.DataFormat = data
    }
}
