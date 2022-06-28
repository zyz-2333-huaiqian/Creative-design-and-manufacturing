function n = pspathnames()
%PSPATHNAMES    Return the path names in the current document.
%   N = PSPATHNAMES N is a cell array of the names of all the paths.
%
%   Example:
%   n = pspathnames()
%
%   See also PSNEWPATH, PSGETPATH, PSNUMPATHS

%   Thomas Ruark, 2/3/2006
%   Copyright 2006 Adobe Systems Incorporated

pssep = '8F6AFB7E-EC1F-4b6f-AD15-C1AF34221EED';

% Build up the JavaScript
pstext = ['var pathNames = [];' ...
    'if (app.documents.length)' ...
    '{' ...
    '    for (var i = 0; i < app.activeDocument.pathItems.length; i++)' ...
    '    {' ...
    '        pathNames.push(app.activeDocument.pathItems[i].name);' ...
    '    }' ...
    '}' ...
    'var b = pathNames.toString();' ...
    'b = b.replace(/,/g, "' pssep '");' ...
    'b;'];

t = psjavascriptu(pstext);
l = strfind(t, pssep);
n = {};
if ~isempty(l)
    le = length(t);
    c = 1;
    for ii = 1:length(l)
        n{ii} = t(c:l(ii)-1);
        c = c + length(n{ii}) + length(pssep);
    end
    n{length(l)+1} = t(c:le);
else
    n{1} = t;
end
