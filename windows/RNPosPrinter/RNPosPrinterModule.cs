using ReactNative.Bridge;
using System;
using System.Collections.Generic;
using Windows.ApplicationModel.Core;
using Windows.UI.Core;

namespace Pos.Printer.RNPosPrinter
{
    /// <summary>
    /// A module that allows JS to share data.
    /// </summary>
    class RNPosPrinterModule : NativeModuleBase
    {
        /// <summary>
        /// Instantiates the <see cref="RNPosPrinterModule"/>.
        /// </summary>
        internal RNPosPrinterModule()
        {

        }

        /// <summary>
        /// The name of the native module.
        /// </summary>
        public override string Name
        {
            get
            {
                return "RNPosPrinter";
            }
        }
    }
}
