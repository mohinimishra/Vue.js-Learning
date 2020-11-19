ls = [1,2,3];
ls1 = [4,5];
ls2 = [2,3];

for ind in ls2 :
    ls.insert(ind,ls1[ind-2])
print(ls)